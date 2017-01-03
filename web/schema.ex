defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types SconeHomeElixir.Schema.Types
 
  query do
    field :list_orders, list_of(:sconely_signature_order) do
      resolve &SconeHomeElixir.OrderResolver.all/2
    end
  end

  mutation do
  		field :create_order, type: :sconely_signature_order do
    		arg :id, (:integer)
    		arg :event_name, (:string)
    		

    resolve &SconeHomeElixir.OrderResolver.create/2
  end
end
end