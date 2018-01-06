defmodule SconeHomeElixir.Repo.Migrations.MenuItemAddCollectionColumn do
  use Ecto.Migration

  def up do

  		alter table(:menu_items) do
		    add :collection, :boolean, default: false
		end
  end
end
