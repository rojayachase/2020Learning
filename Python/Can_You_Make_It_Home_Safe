name = input("What is your name? ")
age = int(input("what is your age? "))
age_until = 18 - age
health = 10


if age >= 18:
    print("Hello!",name,"You are old enough to play")

    wants_to_play = input('Do you want to play? ').lower()

    if wants_to_play == "yes":
        print("The objective of this game is to find your way home but be careful hahahah ;) ")
        print("Hello", name, "! You have a starting health of",health)

        sunny_rainy = input("You arrive at a fork in the road, choose a path...sunny or rainy(sunny/rainy)? ").lower()
        if sunny_rainy == "sunny":
            ans = input("Nice, you followed the Sunny path and reached a Spring full of fresh water and a Apple tree..Do you take a sip of water or eat a apple (water/apple)? ").lower()

            if ans == "water":
                print("You are now hydrated")

            if ans == "apple":
                print("Oh No!, you are no longer hungry but the apple was rotten which causes you to lose 5 health points")
                health -= 5

            ans = input("As you continue to find your way home. You arrive at a big pile of rocks on your left and right side with a path in the middle. Do you walk the path or climb the rocks (walk/climb)? ")

            if ans == "climb":
                print("Ouch!..you fell and lost 5 health points")
                health -= 5
            if ans ==  "walk":
                print("Ouuch a few small rocks fell on you which caused you lost 5 health points")
                health -=5

            if health <= 0:
                print("You now have 0 health, Sorry but you did NOT make it home safely!..")
            else:
                print("You didn't make it home without a scratch BUT you did make it home safely!")





        if sunny_rainy == "rainy":
            ans = input("Nice, as you are trying to find your way home. You come to a puddle, do you jump in or walk around (jump/walk)? ").lower()

            if ans == "jump":
                print("Let's be honest, Who can really avoid jumping into a puddle")

            elif ans == "walk":
                print("Oh No!, You walked around the puddle but fell in, you have lost 5 health points")
                health -= 5



            ans = input("While you were walking you see a bike in perfect condition and a nice pair of running shoes. Do you take the bike or shoes to assit you on your journey home (bike/shoes)? ").lower()
            if ans == "bike":
                print("The bike is riding great but catches a flat which causes you to crash, you lose 5 health")
                health -= 5

                if health <=0:
                    print("You now have 0 health and you did not make it home..!")
                else:
                    print("You have made it home safely!")

            else:
                print("You have made it home Safely")

    else:
        print("Sorry to see you go! ")

else:
    print("You are not old enough to play, see you in", age_until, "years")
