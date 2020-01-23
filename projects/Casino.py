# -*- coding: utf-8 -*-
# Logan W. and Zayn A.
import random
import time
import sys
cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
chips = 1000
wheels = []
dollars = 0
slots = ['-', '-', '-', '=', '=', '=', '≡', '≡', '≡', 'ꭥ', 'ꭥ', '♥', '♥', '$', '7']
originalbet = 0

def ATM():
    global chips
    global dollars
    print("Would you like to exchange chips or dollars?")
    answer = raw_input().lower()
    if 'chip' in answer:
        print("You have decided to exchange chips for money.")
        time.sleep(2)
        NumberofChips(3)
        print("How much do you want to exchange? (Each chip is equal to 5 dollars)")
        betString = raw_input()
        bet = [int(s) for s in betString.split() if s.isdigit()][0]
        if bet > chips:
            print("You don't have enough chips for that. You have " + str(chips) + " chips.")
            time.sleep(3)
            ATM()
        elif bet == 0:
            print("You can't exchange 0 chips!")
            ATM()
        else:
            dollars += (5 * bet)
            chips -= bet
    elif 'dollar' in answer or 'money' in answer:
        print("You have decided to exchange money for chips.")
        time.sleep(2)
        NumberofChips(3)
        print("How much do you want to exchange? (Each chip is equal to 5 dollars)")
        betString = raw_input()
        bet = [int(s) for s in betString.split() if s.isdigit()][0]
        if bet > dollars:
            print("You don't have enough money for that. You have " + str(dollars) + " dollars.")
            time.sleep(3)
            ATM()
        elif bet == 0:
            print("You can't exchange 0 dollars!")
            ATM()
        elif bet % 5 != 0:
            print("Error: Every chip is worth 5 dollars. You entered a value not divisable by 5.")
            time.sleep(5)
            ATM()
        else:
            dollars -= bet
            chips += (bet / 5)
    else:
        print("Unknown answer. Going back to menu.")
        time.sleep(2)
    Menu()
        
def Food():
    global dollars
    NoChips()
    NumberofChips(2)
    print("What would you like to buy? (food or drinks)")
    answer = raw_input()
    if 'f' in answer:
        print("Type the number of the food you want.")
        print("1. Hot Dog - $5")
        print("2. Hamburger - $7")
        print("3. Nachos - $4")
        print("4. Wings - $6")
        print("5. Salad - $3")
        answer = str(raw_input())
        if '1' in answer:
            bet = 5
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 5
        elif '2' in answer:
            bet = 7
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 7
        elif '3' in answer:
            bet = 4
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 4
        elif '4' in answer:
            bet = 6
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 6
        elif '5' in answer:
            bet = 3
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 3
        else:
            print("Unknown answer. Going back to menu.")
            time.sleep(3)
            Menu()
            
    elif 'd' in answer:
        print("Type the number of the drink you want.")
        print("1. Water - FREE")
        print("2. Coca-Cola - $5")
        print("3. Diet Coke - $4")
        print("4. Sprite - $5")
        print("5. Tea - $3")
        answer = str(raw_input())
        if '1' in answer:
            dollars -= 0
        elif '2' in answer:
            bet = 5
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 5
        elif '3' in answer:
            bet = 4
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 4
        elif '4' in answer:
            bet = 5
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 5
        elif '5' in answer:
            bet = 3
            if bet > dollars:
               print("You don't have enough money for that. Going back to menu.")
               time.sleep(3)
               Menu()
            dollars -= 3
        else:
            print("Unknown answer. Going back to menu.")
            time.sleep(3)
            Menu()
            
    else:
        print("Unknown answer. Going back to menu.")
        time.sleep(2)
        Menu()
        
    print("Buy anything else?")
    answer = raw_input().lower()
    if 'y' in answer and 'n' not in answer:
        Food()
    elif 'n' in answer:
        Menu()    
    else:
        print("Unknown answer. Going back to menu.")
        time.sleep(2)
        Menu()
        
def Menu():
    NoChips()
    NumberofChips(3)
    print("Play Blackjack (b or j), play slot machine (slot), use ATM (atm), buy food (buy or food), or quit (q)?")
    answer = raw_input().lower()
    if 'b' in answer or 'j' in answer:
        Blackjack()
    elif 'slot' in answer:
        print("Easy (easy), medium (m), or hard (h) slots?")
        answer = raw_input().lower()
        if 'easy' in answer:
            easyWheels()
        elif 'm' in answer:
            mediumWheels()
        elif 'h' in answer:
            hardWheels()
        else:
            print("Unknown answer.")
            Menu()
    elif 'q' in answer:
        Leave()
    elif 'buy' in answer or 'food' in answer:
        Food()
    elif 'atm' in answer:
        ATM()
    else:
        print("Unknown answer.")
        Menu()
        
def NumberofChips(o):
    if o == 1:
        print("You have " + str(chips) + " chips")
    elif o == 2:
        print("You have " + str(dollars) + " dollars")
    elif o == 3:
        print("You have " + str(dollars) + " dollars and " + str(chips) + " chips")
    elif o == 4:
        print(str(chips) + " chips left")
    time.sleep(2)

def NoChips():
    global chips
    global dollars
    if chips == 0 and dollars == 0:
        print("You have run out of chips. You must leave the casino.")
        time.sleep(3)
        Leave()

def Leave():
    sys.exit("You have left the casino.")

def easyWheels():
    global wheels
    global bet
    global chips
    global originalbet
    NoChips()
    NumberofChips(1)
    print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
    betString = raw_input()
    bet = [int(s) for s in betString.split() if s.isdigit()][0]
    originalbet = bet
    if bet > chips:
        print("You don't have enough chips for that. You have " + str(chips) + " chips.")
        time.sleep(3)
        hardWheels()
    elif bet == 0:
        print("You can't bet 0 chips!")
        hardWheels()
    print("After each spin, you can either spin again (Just press enter), quit (q), or change bet (c). Press enter after each input.")
    time.sleep(4)
    while True:
        wheels = []
        chips -= bet
        for x in range (3):
            number = random.choice(slots[0:9])
            wheels += [number]
        print(wheels[0] + " " + wheels[1] + " " + wheels[2])
        if wheels[0] == wheels[1] == wheels[2]:
            if wheels[0] == '-':
                print("+" + str(bet * 2) + " chips")
                chips += (bet * 2)
            elif wheels[0] == '=':
                print("+" + str(bet * 3) + " chips")
                chips += (bet * 3)
            elif wheels[0] == '≡':
                print("+" + str(bet * 5) + " chips")
                chips += (bet * 5)
        NoChips()
        NumberofChips(4)
        answer = raw_input().lower()
        if answer == '':
            continue
        elif answer == 'q':
            Menu()
        elif answer == 'c':
            NumberofChips(1)
            print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
            betString = raw_input()
            bet = [int(s) for s in betString.split() if s.isdigit()][0]
            if bet > chips:
                print("You don't have enough chips for that. You have " + str(chips) + " chips.")
                time.sleep(3)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue
            elif bet == 0:
                print("You can't bet 0 chips!")
                time.sleep(2)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue
            originalbet = bet

def mediumWheels():
    global wheels
    global bet
    global chips
    global originalbet
    NoChips()
    NumberofChips(1)
    print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
    betString = raw_input()
    bet = [int(s) for s in betString.split() if s.isdigit()][0]
    originalbet = bet
    if bet > chips:
        print("You don't have enough chips for that. You have " + str(chips) + " chips.")
        time.sleep(3)
        hardWheels()
    elif bet == 0:
        print("You can't bet 0 chips!")
        hardWheels()
    print("After each spin, you can either spin again (Just press enter), quit (q), or change bet (c). Press enter after each input.")
    time.sleep(4)
    while True:
        wheels = []
        chips -= bet
        for x in range (3):
            number = random.choice(slots[0:13])
            wheels += [number]
        print(wheels[0] + " " + wheels[1] + " " + wheels[2])
        if wheels[0] == wheels[1] == wheels[2]:
            if wheels[0] == '-':
                print("+" + str(bet * 5) + " chips")
                chips += (bet * 5)
            elif wheels[0] == '=':
                print("+" + str(bet * 10) + " chips")
                chips += (bet * 10)
            elif wheels[0] == '≡':
                print("+" + str(bet * 15) + " chips")
                chips += (bet * 15)
            elif wheels[0] == 'ꭥ':
                print("+" + str(bet * 30) + " chips")
                chips += (bet * 30)
            elif wheels[0] == '♥':
                print("+" + str(bet * 50) + " chips")
                chips += (bet * 50)
        NoChips()
        NumberofChips(4)
        answer = raw_input().lower()
        if answer == '':
            continue
        elif answer == 'q':
            Menu()
        elif answer == 'c':
            NumberofChips(1)
            print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
            betString = raw_input()
            bet = [int(s) for s in betString.split() if s.isdigit()][0]
            if bet > chips:
                print("You don't have enough chips for that. You have " + str(chips) + " chips.")
                time.sleep(3)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue
            elif bet == 0:
                print("You can't bet 0 chips!")
                time.sleep(2)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue
            originalbet = bet
def hardWheels():
    global wheels
    global bet
    global chips
    global originalbet
    NoChips()
    NumberofChips(1)
    print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
    betString = raw_input()
    bet = [int(s) for s in betString.split() if s.isdigit()][0]
    originalbet = bet
    if bet > chips:
        print("You don't have enough chips for that. You have " + str(chips) + " chips.")
        time.sleep(3)
        hardWheels()
    elif bet == 0:
        print("You can't bet 0 chips!")
        hardWheels()
    print("After each spin, you can either spin again (Just press enter), quit (q), or change bet (c). Press enter after each input.")
    time.sleep(4)
    while True:
        wheels = []
        chips -= bet
        for x in range (3):
            number = random.choice(slots)
            wheels += [number]
        print(wheels[0] + " " + wheels[1] + " " + wheels[2])
        if wheels[0] == wheels[1] == wheels[2]:
            if wheels[0] == '-':
                print("+" + str(bet * 10) + " chips")
                chips += (bet * 10)
            elif wheels[0] == '=':
                print("+" + str(bet * 20) + " chips")
                chips += (bet * 20)
            elif wheels[0] == '≡':
                print("+" + str(bet * 30) + " chips")
                chips += (bet * 30)
            elif wheels[0] == 'ꭥ':
                print("+" + str(bet * 50) + " chips")
                chips += (bet * 50)
            elif wheels[0] == '♥':
                print("+" + str(bet * 100) + " chips")
                chips += (bet * 100)
            elif wheels[0] == '$':
                print("+" + str(bet * 250) + " chips")
                chips += (bet * 250)
            elif wheels[0] == '7':
                print("+" + str(bet * 500) + " chips")
                chips += (bet * 500)
        NoChips()
        NumberofChips(4)
        answer = raw_input().lower()
        if answer == '':
            continue
        elif answer == 'q':
            Menu()
        elif answer == 'c':
            NumberofChips(1)
            print("How much would you like to bet? (Remember: this will be the bet per spin of the slot machine)")
            betString = raw_input()
            bet = [int(s) for s in betString.split() if s.isdigit()][0]
            if bet > chips:
                print("You don't have enough chips for that. You have " + str(chips) + " chips.")
                time.sleep(3)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue
            elif bet == 0:
                print("You can't bet 0 chips!")
                time.sleep(2)
                print("Bet will stay as current bet.")
                time.sleep(2)
                bet = originalbet
                continue

def Blackjack():
    global chips
    global cards
    NoChips()
    NumberofChips(1)
    aces = 0
    softaces = 0
    hand = []
    total = 0
    bjstart = True
    print("How much do you want to bet?")
    betString = raw_input()
    bet = [int(s) for s in betString.split() if s.isdigit()][0]
    if bet > chips:
        print("You don't have enough chips for that. You have " + str(chips) + " chips.")
        time.sleep(3)
        Blackjack()
    elif bet == 0:
        print("You can't bet 0 chips!")
        Blackjack()
    while total < 21:
        card = random.choice(cards)
        hand += [card]
        if card == 'J' or card == 'Q' or card == 'K':
            total += 10
        elif card == 'A':
            total += 11
            aces += 1
        else:
            total += int(card)
        if bjstart == True:
            bjstart = False
            card = random.choice(cards)
            hand += [card]
            if card == 'J' or card == 'Q' or card == 'K':
                total += 10
            elif card == 'A':
                total += 11
                aces += 1
            else:
                total += int(card)
        else:
            if 'A' in hand:
                if total > 21:
                    if aces > softaces:
                        total -= 10
                        softaces += 1
        print("Your cards are " + str(hand) + " (" + str(total) + ")")
        time.sleep(2)
        if total == 21:
            print("You got blackjack!")
            time.sleep(2)
            break
        elif total > 21:
            print("Sorry, you busted.")
            chips -= bet
            time.sleep(2)
            print("Play again?")
            answer = raw_input().lower()
            if 'y' in answer and 'n' not in answer:
                Blackjack()
            elif 'n' in answer:
                Menu()    
            else:
                print("Unknown answer. Going back to menu.")
                time.sleep(2)
                Menu()
        else:
            print("Hit or stay?")
            answer = raw_input().lower()
            if 's' in answer:
                print("You have decided to stay.")
                time.sleep(2)
                break
            elif 'h' in answer:
                print("You have decided to hit.")
                time.sleep(2)
            elif total > 17:
                print("Unknown answer. Assuming you will stay.")
                time.sleep(2)
                break           
            else:
                print("Unknown answer. Assuming you will hit.")
                time.sleep(2)
                
    print("Let's see what the dealer has.")
    time.sleep(2)
    dealerhand = random.randint(total, total + 2)
    if dealerhand > 21:
        print("The dealer busted! You win " + str(bet * 2) + " chips!")
        chips += bet
    elif dealerhand == total:
        print("The dealer got the same total as you. You get your original bet back (" + str(bet) + ")")
    else:
        print("The dealer beat your hand. You don't win anything")
        chips -= bet
    time.sleep(2)
    print("Play again?")
    answer = raw_input().lower()
    if 'y' in answer and 'n' not in answer:
        Blackjack()
    elif 'n' in answer:
        Menu()    
    else:
        print("Unknown answer. Going back to menu.")
        time.sleep(2)
        Menu()
        
Menu()