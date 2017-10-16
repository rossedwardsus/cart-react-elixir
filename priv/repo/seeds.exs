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

alias Sconely.MenuItem
alias SconeHomeElixir.Repo

#{"name":"DWK","ingredients":"Unbleached white all-purpose flour*, Anjou pears*, Pecans, Butter*, Eggs*, Heavy Cream*, Coconut sugar*, Fresh ginger*, Ground ginger, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":1,"description":"DWK is an exquisite combination of flavors and textures, with caramelized pears, praline pecans and fresh ginger."},{"name":"Snorker","ingredients":"Unbleached white all-purpose flour*, Dark chocolate*, Hazelnuts, Cocoa powder*, Heavy Cream*, Eggs*, Coconut sugar*, Butter*, Pure vanilla extract*, Baking powder, Sea salt. *Organic","id":2,"description":"Snorker is a rich double dark chocolate dessert scone with dark chocolate chunks and hazelnut praline. \r"},{"name":"Ruby Q","ingredients":"Unbleached white all-purpose flour*, Fresh cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic","id":3,"description":"Fresh cherries, semisweet chocolate chunks and Madagascar vanilla bean – sweet and simple.\r"},{"name":"Suzy Sunshine","ingredients":"Unbleached white all-purpose flour*, Bananas*, Deglet noor dates, Eggs*, Yogurt*, Butter*, Chai tea*, Coconut sugar*, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":4,"description":"A rich, warming banana date scone enhanced with Awarding-Winning Masala Chai from SerendipiTea.\r"},{"name":"Bea (Vegan)","ingredients":"Unbleached white all-purpose flour*, Fresh blueberries*, Almond milk*, Matcha tea*, Virgin coconut oil*, Ground flax seeds*, Lemon zest*, Coconut sugar*, Pure vanilla extract*, Baking powder, Sea salt. *Organic\r","id":5,"description":"Bursting with plump fruit, antioxidant-filled blueberry matcha tea lemon scone.\r"},{"name":"Julie Freedom (Vegan and Gluten-Free)","ingredients":"Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Gluten free oats*, Almond meal*, Dried unsulfured apricots*, Whole raw almonds, Sunflower seeds, Pumpkin seeds*, Golden raisins, Chia seeds*, Dried unsweetened unsulfured cranberries*, Dried unsweetened unsulfured dried cherries, Almond milk*, Virgin coconut oil*, Maple syrup*, Tangerine zest*, Baking soda, Baking powder, Pure vanilla extract*, Sea salt. *Organic\r","id":6,"description":"This healthy scone is nutrient dense with chia seeds, unsulfured dried fruit and crunchy nuts, naturally sweetened with maple syrup and tangerine zest."},{"name":"Zilla","ingredients":"Unbleached white all-purpose flour*, Purple onions*, Gruyere, Butter*, Eggs*, Heavy cream*, Sage*, Baking powder, Raw cane sugar*, Sea salt. *Organic","id":7,"description":"Zilla is a savory powerhouse. It perfectly combines gruyere cheese, slowly caramelized purple onions and sage.\r"},{"name":"Savvy Go Go\r","ingredients":"Unbleached white all-purpose flour,* Sun-dried tomatoes, Oven-dried tomatoes*, Goat cheese, Eggs*, Heavy cream*, Butter*, Thyme*, Basil*, Rosemary*, Oregano*, Garlic*, Baking powder, Raw cane sugar*, Sea salt. *Organic\r","id":8,"description":"Savory and satisfying with sun-dried tomatoes, goat cheese and fresh herbs, Savvy Go Go is perfect for meals or snacks on the go!"},{"name":"Ishkabibble (Vegan and Gluten-Free)","ingredients":"Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Almond milk*, Gold potatoes*, Virgin coconut oil*, Roasted garlic*, Kale*, Chives*, Preserved lemons*, Ground flax seeds,* Baking powder, Coconut sugar*, Black pepper, Ground and fresh turmeric*, Sea salt, White pepper*. *Organic\r","id":9,"description":"Ishkabibble is a unique potato kale scone enhanced with roasted garlic, fresh chives, tumeric, and house made preserved lemons. Vegans, gluten-free eaters and anyone in search of a healthy, savory alternative love this one!\r"

#menu_item_id?

#menu_item_id = Repo.one(from mi in "menu_items", select: count(mi.menu_item_id))





menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 1, order: 1, name: "DWK",ingredients: "Unbleached white all-purpose flour*, Anjou pears*, Pecans, Butter*, Eggs*, Heavy Cream*, Coconut sugar*, Fresh ginger*, Ground ginger, Baking powder, Pure vanilla extract*, Sea salt. *Organic", description: "An exquisite combination of flavors and textures with caramelized pears, praline pecans and fresh ginger", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 2, order: 2, name: "Snorker", ingredients: "Unbleached white all-purpose flour*, Dark chocolate*, Hazelnuts, Cocoa powder*, Heavy Cream*, Eggs*, Coconut sugar*, Butter*, Pure vanilla extract*, Baking powder, Sea salt. *Organic", description: "A rich double dark chocolate dessert scone with dark chocolate chunks and hazelnut praline", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 3, order: 3, name: "Ruby Q", ingredients: "Unbleached white all-purpose flour*, Fresh cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", description: "Fresh cherries, semisweet chocolate chunks and Madagascar vanilla bean", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 4, order: 4, name: "Suzy Sunshine", ingredients: "Unbleached white all-purpose flour*, Bananas*, Deglet noor dates*, Eggs*, Yogurt*, Butter*, Chai tea*, Coconut sugar*, Baking powder, Pure vanilla extract*, Sea salt. *Organic", description: "A rich, warming banana date scone enhanced with Awarding-Winning Masala Chai from SerendipiTea.", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 5, order: 5, name: "Bea (Vegan)", ingredients: "Unbleached white all-purpose flour*, Fresh blueberries*, Almond milk*, Matcha tea*, Virgin coconut oil*, Ground flax seeds*, Lemon zest*, Coconut sugar*, Pure vanilla extract*, Baking powder, Sea salt. *Organic", description: "Plump blueberries throughout, with healthy benefits of matcha tea and lemon", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 6, order: 6, name: "Julie Freedom (Vegan and Gluten-Free)", ingredients: "Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Gluten free oats*, Almond meal*, Dried unsulfured apricots*, Whole raw almonds, Sunflower seeds, Pumpkin seeds*, Golden raisins, Chia seeds*, Dried unsulfured cranberries*, Dried unsweetened unsulfured dried cherries, Almond milk*, Virgin coconut oil*, Maple syrup*, Baking soda, Baking powder, Pure vanilla extract*, Sea salt, Tangerine*. *Organic", description: "Nutrient dense with chia seeds, dried fruit and crunchy nuts, naturally sweetened with maple syrup and tangerine", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 7, order: 7, name: "Zilla", ingredients: "Unbleached white all-purpose flour*, Purple onions*, Gruyere, Butter*, Eggs*, Heavy cream*, Sage*, Baking powder, Raw cane sugar*, Sea salt. *Organic", description: "A savory powerhouse that perfectly combines gruyere cheese, caramelized purple onion and sage", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 8, order: 8, name: "Savvy Go Go", ingredients: "Unbleached white all-purpose flour*, Purple caramelized onions*, Gruyere, Butter*, Eggs*, Heavy cream*, Sage*, Baking powder, Raw cane sugar*, Sea salt. *Organic", description: "Savory and satisfying with sun-dried tomatoes, goat cheese and fresh herbs, Savvy Go Go is perfect for meals or snacks on the go!", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 9, order: 9, name: "Ishkabibble (Vegan and Gluten-Free)", ingredients: "Gluten-free flour (brown rice flour*, sorghum flour*, potato starch, arrowroot powder*), Almond milk*, Gold potatoes*, Virgin coconut oil*, Roasted garlic*, Kale*, Chives*, Preserved lemons*, Flax seeds,* Baking powder, Coconut sugar*, Ground and fresh turmeric*, Sea salt, Black and white pepper. *Organic", description: "A unique potato kale scone enhanced with roasted garlic, turmeric and house made preserved lemons", assortment: false, active: true})

Repo.insert!(menu_item_changeset)

menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 10, order: 10, name: "Paul Bear (Vegan)", ingredients: "Spelt flour*, Kamut flour*, Granny smith apples*, Golden raisins*, Virgin coconut oil*, Almond milk*, Flax seeds*, Coconut sugar*, Pure vanilla extract*, Baking powder, Cinnamon, Sea salt. *Organic", description: "Hearty ancient grains meet granny smith apples, golden raisins and crunchy cinnamon topping", assortment: false, active: true})

Repo.insert!(menu_item_changeset)


menu_item_changeset = MenuItem.changeset(%MenuItem{}, %{menu_item_id: 11, order: 11, name: "Lucky", ingredients: "Unbleached white all-purpose flour*, Sweet potatoes*, Leeks*, Eggs*, Heavy cream*, Dried unsulfured cranberries*, Butter*, Rosemary*, Aged Balsamic vinegar, Maple Syrup*, Baking powder, Sea salt. *Organic", description: "Our 2017 / 2018 holiday scone brings together roasted sweet potatoes, leeks, cranberries and rosemary", assortment: false, active: true})

Repo.insert!(menu_item_changeset)





#user_pools
#pool orders
