class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :upvote, default: 0
      t.integer :downvote, default: 0
      t.integer :user_id
      t.integer :answer_id

      t.timestamps
    end
  end
end
