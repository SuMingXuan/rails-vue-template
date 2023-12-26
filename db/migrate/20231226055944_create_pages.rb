class CreatePages < ActiveRecord::Migration[7.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :description
      t.text :content
      t.integer :user_id

      t.timestamps
    end
  end
end
