defmodule SconeHomeElixir.Repo.Migrations.CreateOrderItemsTable do
  use Ecto.Migration

  def change do
	create table(:order_items) do
	  add :user_id, :integer #uuid or "guest"
      add :pool_yours_social_order_id, :bigint
      add :item_id, :integer
      add :quantity, :integer
      add :size, :string
      #assorted
      #active
      #date time added
	end
  end
end
