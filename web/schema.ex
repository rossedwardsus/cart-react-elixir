defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 
  query do
    field :list_orders, list_of(:sconely_signature_order) do
      resolve &Sconely.OrderResolver.all/2
    end

    field :get_order, type: :sconely_signature_order do
        arg :order_id, non_null(:string)
	    
        resolve &Sconely.OrderResolver.get_order/2
    end

    field :user_orders, list_of(:sconely_signature_order) do
        arg :host_id, non_null(:string)
	    
        resolve &Sconely.OrderResolver.user_orders/2
    end
  end

  #input_object :update_order_params do
	#field :event_name, (:string)
  #end

  mutation do
  	field :create_order, type: :sconely_signature_order do
    	arg :host_id, (:string)
    	arg :event_type
    		
    	resolve &Sconely.OrderResolver.create/2
  	end
  
	field :update_order, type: :sconely_signature_order do
	    arg :order_id, non_null(:string)
	    arg :order, :update_order_params
	 
	    resolve &Sconely.OrderResolver.update/2
	end
  end
end