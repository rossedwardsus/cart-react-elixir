defmodule SconeHomeElixir.Repo.Migrations.CreateOrderItemsTable do
  use Ecto.Migration

  def up do
	create_if_not_exists table(:order_items, primary_key: false) do
	  add :id, :uuid, primary_key: true
	  add :user_id, :uuid
      add :parent_order_id, :uuid
      add :menu_item_id, :integer
      add :quantity, :integer
      add :size, :string, size: 10
      #assorted
      #active
      #date time added
	end
  end
end
