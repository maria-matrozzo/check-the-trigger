class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :image
      t.string :pages
      t.string :description
      t.string :publication_date
      t.string :publisher
      t.string :genre

      t.belongs_to :author

      t.timestamps
    end
  end
end
