defmodule SconeHomeElixir.Repo.Migrations.CreateMenuItemsTable do
  use Ecto.Migration

  def up do
  	create table(:menu_items, primary_key: false) do
      add :item_id, :integer, primary_key: true
      add :title, :string, size: 40
      add :description, :string, size: 40
      add :active, :string, size: 40
    end
  end

  def down do
    drop table(:weather)
  end
end
