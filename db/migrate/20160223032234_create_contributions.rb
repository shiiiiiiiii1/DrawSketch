class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.string :title
      t.string :img
      t.integer :good, :default => 0
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
