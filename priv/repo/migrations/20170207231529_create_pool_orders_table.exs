defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrdersTable do
  use Ecto.Migration

  def change do

  	create_if_not_exists table(:pool_orders) do
      add :user_id, :bigint
      add :order_id, :bigint
      add :admin_receipt_order_id, :bigint
  	  add :delivery_contact_address_id, :smallint
      add :pool_name, :string, size: 50
      add :delivery_date, :date
      #add :specific_delivery_time, :string
      add :delivery_time_range, :string, size: 20
      #add :payment_method_id, :smallint
      #delivery note
      #add :order_datetime, :datetime
      #status
    end
  end
end
