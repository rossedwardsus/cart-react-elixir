defmodule SconeHomeElixir.Repo.Migrations.CreateSconelyOrderItemsTable do
  use Ecto.Migration

  def change do
	create table(:order_items) do
	  add :user_id, :string #uuid or "guest"
      add :order_id, :uuid
      add :item_id, :integer
      add :mini, :boolean
	end
  end
end
