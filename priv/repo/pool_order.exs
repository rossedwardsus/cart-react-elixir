# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     SconeHomeElixir.Repo.insert!(%SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


#menu items

alias Sconely.UserPools
alias Sconely.PoolOrder
alias SconeHomeElixir.Repo



pool_order_changeset = PoolOrder.changeset(%PoolOrder{}, %{user_id: 11, user_contact_address_id: 1, delivery_date: "Lucky", delivery_time_range: "", pool_admin_receipt_order_id: 1111111})

#Repo.insert!(pool_order_changeset)


#user_pools
#pool orders
