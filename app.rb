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

post '/sign_up' do
  @user = User.create(
    name: params[:name],
    password: params[:password],
    password_confirmation: params[:password_confirmation]
    )
  if @user.persisted?
    session[:user] = @user.id
  end
  redirect '/'
end

post '/sign_in' do
  user = User.find_by(name: params[:name])
  if user && user.authenticate(params[:password])
    session[:user] = user.id
  end
  redirect '/'
end
