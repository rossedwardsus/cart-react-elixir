defmodule SconeHomeElixir.Repo.Migrations.MenuItemAddCollectionColumn do
  use Ecto.Migration

  def up do

  		alter table(:menu_items) do
		    add :collection_name, :string, size: 30
		    add :collection_description, :string, size: 30
		end
  end
end
