defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 
  query do

  	field :get_menu_items, list_of(:menu_item) do
      resolve &Sconely.OrderResolver.get_menu_items/2
    end


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


  
	field :save_sconely_signature_order_event_details, type: :sconely_signature_order_event_details do
	    arg :order_id, non_null(:string)
	    arg :event_name, :string
	    arg :event_date, :string
	    arg :event_time, :string
	 
	    resolve &Sconely.OrderResolver.save_sconely_signature_order_event_details/2
	end


	field :save_sconely_signature_order_additional_items, type: :sconely_signature_order_additional_items do
	    arg :order_id, non_null(:string)
	    arg :items, list_of(:menu_item)
	    #arg :quantity, :string
	 
	    resolve &Sconely.OrderResolver.save_sconely_signature_order_additional_items/2
	end


	field :complete_sconely_signature_order, type: :sconely_signature_order do
	    arg :order_id, :string
	    arg :amount, :integer
	 
	    resolve &Sconely.OrderResolver.complete_sconely_signature_order/2
	end
  end
end