require 'bundler/setup'
Bundler.require
require 'sinatra/reloader' if development?

require './models/item.rb'

enable :sessions


get '/' do
  erb :index
end
get '/sign_up' do
  erb :sign_up
end
get '/sign_in' do
  erb :sign_in
end
get '/sign_out' do
  session[:user] = nil
  redirect '/'
end
get '/user/:id' do
  @contributions = Contribution.all
  erb :user
end
get '/view' do
  @contributions = Contribution.all
  erb :view
end

post '/sign_up' do
  @user = User.create(
    name: params[:name],
    password: params[:password],
    password_confirmation: params[:password_confirmation]
    )
  if @user.persisted?
    session[:user] = @user.id
  end
  redirect '/user'
end

post '/sign_in' do
  user = User.find_by(name: params[:name])
  if user && user.authenticate(params[:password])
    session[:user] = user.id
  end
  redirect '/user/:id'
end

post '/create' do
  day = Time.now
  year = day.year
  month = day.month
  date = day.day
  hour = day.hour
  min = day.min
  sec = day.sec
  Contribution.create({
    title: params[:title],
    img: params[:imgURL],
    good: 0,
    user_id: session[:user]
  })
  redirect '/user/:id'
end

post '/good/:id' do
  @contribution = Contribution.find(params[:id])
  good = @contribution.good
  @contribution.update({
    good: good + 1
  })
  redirect '/view'
end

post '/delet/:id/:id' do
  Contribution.find(params[:id]).destroy
  redirect '/user/:id'
end