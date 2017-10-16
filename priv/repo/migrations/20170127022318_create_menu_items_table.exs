defmodule SconeHomeElixir.Repo.Migrations.CreateMenuItemsTable do
  use Ecto.Migration

  def up do
  	
    create_if_not_exists table(:menu_items, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :menu_item_id, :smallint
      add :name, :string, size: 100
      add :description, :text
      add :ingredients, :text
      add :assortment, :boolean
      add :active, :boolean
      add :order, :smallint
    end
  
  end

  def down do
    #drop table(:weather)
  end
end
