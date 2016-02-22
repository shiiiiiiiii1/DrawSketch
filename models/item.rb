ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']||"sqlite3:db/development.db")
class Item < ActiveRecord::Base

end

class User < ActiveRecord::Base
  has_secure_password
  validates :password,
    presence: true
  validates :password,
    length: {in: 8..15}
end