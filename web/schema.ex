defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types SconeHomeElixir.Schema.Types
 
  query do
    field :list_orders, list_of(:sconely_signature_order) do
      resolve &SconeHomeElixir.OrderResolver.all/2
    end
  end

  #input_object :update_order_params do
	#field :event_name, (:string)
  #end

  mutation do
  	field :create_order, type: :sconely_signature_order do
    	arg :host_id, (:string)
    	arg :event_name, (:string)
    	arg :event_datetime, (:string)
    		
    	resolve &SconeHomeElixir.OrderResolver.create/2
  	end
  
	field :update_order, type: :sconely_signature_order do
	    arg :order_id, non_null(:string)
	    arg :order, :update_order_params
	 
	    resolve &SconeHomeElixir.OrderResolver.update/2
	end
  end
end