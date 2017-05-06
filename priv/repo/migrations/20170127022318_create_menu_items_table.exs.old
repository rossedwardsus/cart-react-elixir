defmodule SconeHomeElixir.Repo.Migrations.CreateMenuItemTable do
  use Ecto.Migration

  def up do
  	create table(:menu_items) do
      add :item_id,    :string, size: 40
      add :title,     :string, size: 40
      add :description,    :string, size: 40
      add :active,    :string, size: 40
    end
  end

  def down do
    drop table(:weather)
  end
end
