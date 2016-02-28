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
  @contributions = Contribution.where(user_id: session[:user]).order("id DESC").all
  erb :user
end
get '/view' do
  @contributions = Contribution.order("id DESC").all
  erb :view
end
get '/view_goods' do
  @contributions = Contribution.order("good DESC").all
  erb :view_goods
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
  redirect '/user/:id'
end

post '/sign_in' do
  user = User.find_by(name: params[:name])
  if user && user.authenticate(params[:password])
    session[:user] = user.id
  end
  redirect '/user/:id'
end

post 'sign_out' do
  session[:user] = nil
  redirect '/'
end

post '/create' do
  Contribution.create({
    title: params[:title],
    img: params[:imgURL],
    good: 0,
    user_id: session[:user]
  })
  redirect '/user/:id'
end

post '/delet/:id/:id' do
  Contribution.find(params[:id]).destroy
  redirect '/user/:id'
end


post '/good/:id' do
  @contribution = Contribution.find(params[:id])
  good = @contribution.good
  @contribution.update({
    good: good + 1
  })
  redirect '/user/:id'
end

post '/good/:id/view' do
  @contribution = Contribution.find(params[:id])
  good = @contribution.good
  @contribution.update({
    good: good + 1
  })
  redirect '/view'
end

post '/good/:id/view_goods' do
  @contribution = Contribution.find(params[:id])
  good = @contribution.good
  @contribution.update({
    good: good + 1
  })
  redirect '/view_goods'
end
