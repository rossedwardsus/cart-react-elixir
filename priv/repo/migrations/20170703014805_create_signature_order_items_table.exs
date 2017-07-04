defmodule SconeHomeElixir.Repo.Migrations.AddSignatureOrderItemsTable do
  use Ecto.Migration

  def change do

  	create table(:signature_order_items) do
      add :parent_order_id, :string, null: false
  	  add :item_id, :string
  	  add :mini, :string
  	  add :quantity, :string
  	  #datetime selected
  	end

  end
end
