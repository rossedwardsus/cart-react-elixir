defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrdersTable do
  use Ecto.Migration

  def up do

  	create_if_not_exists table(:pool_orders, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :user_id, :uuid
      add :user_pool_id, :smallint
      add :parent_order_id, :uuid
      add :admin_receipt_order_id, :bigint
  	  add :user_delivery_contact_address_id, :smallint
      add :delivery_date, :date
      add :delivery_time_range, :string, size: 20
      add :pickup_location, :string, size: 50
      add :note, :string, size: 255
      add :status, :string, size: 10
    end
  end
end
