class CreateNpcs < ActiveRecord::Migration[5.2]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :imgUrl 
      t.integer :x
      t.belongs_to :stage, foreign_key: true

      t.timestamps
    end
  end
end
