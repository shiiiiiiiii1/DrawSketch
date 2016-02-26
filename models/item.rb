ActiveRecord::Base.establish_connection(ENV['DATABASE_URL']||"sqlite3:db/development.db")
class Item < ActiveRecord::Base

end

class User < ActiveRecord::Base
  has_many :contributions
  has_secure_password
  validates :name,
    presence: true
  validates :password,
    length: {in: 8..15}
end

class Contribution < ActiveRecord::Base
  belongs_to :user
end