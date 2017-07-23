defmodule SconeHomeElixir.Repo.Migrations.CreateMenuItemsTable do
  use Ecto.Migration

  def up do
  	create table(:menu_items) do
      #add :item_id, :integer, primary_key: true
      add :name, :string, size: 40
      add :description, :text
      add :ingredients, :text
      add :active, :string, size: 40
    end
  end

  def down do
    drop table(:weather)
  end
end
