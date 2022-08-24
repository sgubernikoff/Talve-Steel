class CreateCoils < ActiveRecord::Migration[6.1]
  def change
    create_table :coils do |t|
      t.string :grade
      t.string :com_spec
      t.integer :net
      t.integer :gross
      t.integer :quantity
      t.integer :pkgs

      t.timestamps
    end
  end
end
