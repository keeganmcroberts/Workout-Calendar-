class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :date
      t.string :day
      t.string :group
      t.string :exercises
      t.string :notes

      t.timestamps
    end
  end
end
