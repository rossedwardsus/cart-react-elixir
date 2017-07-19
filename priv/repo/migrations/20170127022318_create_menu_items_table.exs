defmodule SconeHomeElixir.Repo.Migrations.CreateMenuItemsTable do
  use Ecto.Migration

  def up do
  	create table(:menu_items, primary_key: false) do
      add :item_id, :integer, primary_key: true
      add :name, :string, size: 40
      add :description, :string, size: 100
      add :ingredients, :string, size: 100
      add :active, :string, size: 40
    end
  end

  def down do
    drop table(:weather)
  end
end
