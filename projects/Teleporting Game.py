import Tkinter
import tkFont
from Tkinter import Canvas, NW, Scale, HORIZONTAL, Button
import time
from time import clock

root = Tkinter.Tk()
root.title("Tele-Portal")
canvas = Canvas(root,width=500,height=500)
canvas.pack()
canvas.grid()

global controlsButton
global controlsText
global prevButton
global startButton
global roomText
global room
global ground
global player
global game
global orange_portal
global blue_portal
global ledge
global onLedge
global level
global door
global instructionsText
global title
global ledge2
global jumping

bigfont = tkFont.Font(size=70)
buttonfont = tkFont.Font(size=50)
font = tkFont.Font(size=20)
font2 = tkFont.Font(size=15)

orange_portal = canvas.create_oval(0,0,0,0)
blue_portal = canvas.create_oval(500,500,500,500)

player = canvas.create_oval(0,0,0,0) 
ledge = canvas.create_polygon(0,0,0,0,0,0,0,0)
ledge2 = canvas.create_polygon(0,0,0,0,0,0,0,0)
door = canvas.create_polygon(0,0,0,0,0,0,0,0)

jumping = False
game = False

roomText = canvas.create_text(250, 25, text="", font=font)
controlsText = canvas.create_text(250, 150, text="", font=font)
instructionsText = canvas.create_text(260, 250, text="", font=font2)
title = canvas.create_text(250, 100, text="Tele-Portal", font=bigfont)

inputs = []

timeChange = 0
pastFrameTime = clock()

    
def Controls():
    global controlsButton
    global controlsText
    global prevButton
    global startButton
    global roomText
    global ground
    global player
    global instructionsText
    global title
    
    controlsButton.destroy()
    startButton.destroy()
    
    canvas.itemconfigure(roomText, text="Controls")
    canvas.itemconfigure(controlsText, text="Move Left - A\nMove Right - D\nCreate Orange Portal - Left Click\nCreate Blue Portal - Right Click\n\n")
    canvas.itemconfigure(instructionsText, text="\n\nThis game is played by creating portals (one orange,\none blue), and using them to teleport to each other.\nFor example, you can go through the orange portal, and\nyou will come out of the blue portal, and vice versa.\nThe objective is to reach the black door, which leads\nto the next level. The portals can only be used on the\nwalls (the leftmost and rightmost tan pillars).")
    canvas.itemconfigure(title, text="")
    
    prevButton = Button(root,command = Previous,background="tan",text="Menu",font=tkFont.Font(size=40))
    prevButton.pack()
    canvas.create_window(30, 400, width=150,height=50,anchor=NW, window=prevButton)
    
def Previous():
    global controlsButton
    global controlsText
    global prevButton
    global startButton
    global roomText
    global instructionsText
    global title
    
    prevButton.destroy()
        
    controlsButton = Button(root,command = Controls,background="green",text="Controls", font=buttonfont)
    controlsButton.pack()
    canvas.create_window(125, 340, width=250,height=100,anchor=NW, window=controlsButton)
    
    startButton = Button(root,command = Start,background="red",text="Start", font=buttonfont)
    startButton.pack()
    canvas.create_window(150, 200, width=200,height=100,anchor=NW, window=startButton)
        
    canvas.itemconfigure(roomText, text="")
    canvas.itemconfigure(controlsText, text="")
    canvas.itemconfigure(instructionsText, text="")
    canvas.itemconfigure(title, text="Tele-Portal")
         
def Start():
    global controlsButton
    global controlsText
    global prevButton
    global startButton
    global roomText
    global ground
    global player
    global game
    global ledge
    global onLedge
    global level
    global door
    global title
    
    game = True
    level = 1
    
    controlsButton.destroy()
    startButton.destroy()
    
    canvas.itemconfigure(roomText,text="Level 1")
    canvas.itemconfigure(title,text="")
    
    ground = canvas.create_polygon(0, 460, 0, 500, 500, 500, 500, 460, fill="tan", outline="brown")
    wall1 = canvas.create_polygon(0, 0, 0, 460, 30, 460, 30, 0, fill="tan", outline="brown")
    wall2 = canvas.create_polygon(470, 460, 500, 460, 500, 0, 470, 0, fill="tan", outline="brown")
    player = canvas.create_oval(140, 420, 180, 460) 
    ledge = canvas.create_polygon(30, 200, 30, 230, 470, 230, 470, 200, fill="brown")
    door = canvas.create_polygon(470, 150, 470, 200, 480, 200, 480, 150)
    
    onLedge = False

def Level2():
    global roomText
    global level
    global orange_portal
    global blue_portal
    global ledge
    global player
    
    level = 2
    
    canvas.delete(orange_portal)
    canvas.delete(blue_portal)
    orange_portal = canvas.create_oval(0,0,0,0)
    blue_portal = canvas.create_oval(500,500,500,500)
    
    canvas.delete(ledge)
    ledge = canvas.create_polygon(420, 200, 420, 230, 470, 230, 470, 200, fill="brown")
    
    canvas.move(player, -350, 200)
    
    canvas.itemconfigure(roomText, text="Level 2")

def Level3():
    global roomText
    global level
    global orange_portal
    global blue_portal
    global ledge
    global player
    global door
    global ledge2
    
    level = 3
    
    canvas.delete(orange_portal)
    canvas.delete(blue_portal)
    orange_portal = canvas.create_oval(0,0,0,0)
    blue_portal = canvas.create_oval(500,500,500,500)
    
    canvas.delete(ledge)
    ledge = canvas.create_polygon(420, 0, 420, 200, 470, 200, 470, 0, fill="brown")
    canvas.delete(ledge2)
    ledge2 = canvas.create_polygon(180, 250, 180, 280, 470, 280, 470, 250, fill="brown")
    
    canvas.delete(door)
    door = canvas.create_polygon(470, 200, 470, 250, 480, 250, 480, 200)
    
    canvas.move(player, -350, 200)

    canvas.itemconfigure(roomText, text="Level 3")    
    
def End():
    global roomText
    global level
    global orange_portal
    global blue_portal
    global ledge
    global player
    global door
    global ledge2
    
    canvas.delete(orange_portal)
    canvas.delete(blue_portal)
    orange_portal = canvas.create_oval(0,0,0,0)
    blue_portal = canvas.create_oval(500,500,500,500)
    
    canvas.delete(ledge)
    ledge = canvas.create_polygon(0,0,0,0, fill="brown")
    canvas.delete(ledge2)
    ledge2 = canvas.create_polygon(0,0,0,0, fill="brown")
    
    canvas.delete(door)
    door = canvas.create_polygon(470, 200, 470, 250, 480, 250, 480, 200, fill="tan")
    
    canvas.move(player, -200, 200)

    canvas.itemconfigure(roomText, text="")
        
    canvas.tag_raise(title)
    canvas.itemconfigure(title, text="You win!!")
    canvas.itemconfigure(controlsText, text="\n\n\n\n    You are welcome to freely roam\n    in this area, or you may exit the\n    game.")
    
def NewLevel():
    global title
    global level
    if level == 1:
        Level2()
    elif level == 2:
        Level3()
    elif level == 3:
        End()
    
def Left():
    global player
    global playerCoords
    global orangeCoords
    global blueCoords
    
    if playerCoords[0] > 30:
        if playerCoords[0] -150 * timeChange > 0:
            canvas.move(player, -150 * timeChange, 0)
    if orangeCoords[2] == 30:
        if 30 < playerCoords[0] < 35 and ((playerCoords[1] <= (orangeCoords[3] or orangeCoords[1]) <= playerCoords[3]) or (playerCoords[1] <= ((orangeCoords[3]+orangeCoords[1])*.5) <= playerCoords[3])):
            if blueCoords[0] == 470:
                canvas.move(player, -100 + blueCoords[2], -(orangeCoords[1]-blueCoords[1]))
            elif blueCoords[2] == 30:
                canvas.move(player, 20, -(orangeCoords[1]-blueCoords[1]))
    if blueCoords[2] == 30:
        if 30 < playerCoords[0] < 35 and ((playerCoords[1] <= (blueCoords[3] or blueCoords[1]) <= playerCoords[3]) or (playerCoords[1] <= ((blueCoords[3]+blueCoords[1])*.5) <= playerCoords[3])):
            if orangeCoords[0] == 470:
                canvas.move(player, -100 + orangeCoords[2], -(blueCoords[1]-orangeCoords[1]))
            elif orangeCoords[2] == 30:
                canvas.move(player, 20, -(blueCoords[1]-orangeCoords[1]))

def Right():
    global player
    global playerCoords
    global orangeCoords
    global blueCoords
    global ledgeCoords
    global doorCoords

    if playerCoords[2] < 470:
        if playerCoords[2] + 150 * timeChange > 0:
            canvas.move(player, 150 * timeChange, 0)
    if orangeCoords[0] == 470:
        if 460 < playerCoords[2] < 465 and ((playerCoords[1] <= (orangeCoords[3] or orangeCoords[1]) <= playerCoords[3]) or (playerCoords[1] <= ((orangeCoords[3]+orangeCoords[1])*.5) <= playerCoords[3])):
            if blueCoords[2] == 30:
                canvas.move(player, -430 + blueCoords[2], -(orangeCoords[1]-blueCoords[1]))
            elif blueCoords[0] == 470:
                canvas.move(player, -20, -(orangeCoords[1]-blueCoords[1]))
    if blueCoords[0] == 470:
        if 460 < playerCoords[2] < 465 and ((playerCoords[1] <= (blueCoords[3] or blueCoords[1]) <= playerCoords[3]) or (playerCoords[1] <= ((blueCoords[3]+blueCoords[1])*.5) <= playerCoords[3])):
            if orangeCoords[2] == 30:
                canvas.move(player, -430 + orangeCoords[2], -(blueCoords[1]-orangeCoords[1]))
            elif orangeCoords[0] == 470:
                canvas.move(player, -20, -(blueCoords[1]-orangeCoords[1]))
    if playerCoords[2] >= doorCoords[0] and doorCoords[1] <= ((playerCoords[1]+playerCoords[3])*.5) <= doorCoords[3]:
        NewLevel()

def Keys():
    global inputs
    global playerCoords
    global player
    global orangeCoords
    global orange_portal
    global blueCoords
    global blue_portal
    global ledge
    global ledgeCoords
    global onLedge
    global door
    global doorCoords
    global ledge2
    global ledge2Coords
    global jumping
    
    if "a" in inputs:
        Left()
    if "d" in inputs:
        Right()
    canvas.after(1, Keys)
    if game == True:
        playerCoords = canvas.coords(player)
        orangeCoords = canvas.coords(orange_portal)
        blueCoords = canvas.coords(blue_portal)
        ledgeCoords = canvas.coords(ledge)
        doorCoords = canvas.coords(door)
        ledge2Coords = canvas.coords(ledge2)
        if (playerCoords[3] <= ledgeCoords[1]+10) and ((ledgeCoords[0]-5) <= ((playerCoords[0]+playerCoords[2])*.5) <= (ledgeCoords[4]+5)):
            if onLedge == False:
                canvas.move(player, 0, 150 * timeChange)
            if playerCoords[3] > ledgeCoords[1]:
                canvas.move(player, 0, ledgeCoords[1]-playerCoords[3])
                onLedge = True
        elif playerCoords[3] < 460:
            canvas.move(player, 0, 150 * timeChange)
        if (playerCoords[3] <= ledge2Coords[1]+10) and ((ledge2Coords[0]-5) <= ((playerCoords[0]+playerCoords[2])*.5) <= (ledge2Coords[4]+5)):
            if onLedge == False:
                canvas.move(player, 0, 150 * timeChange)
            if playerCoords[3] > ledge2Coords[1]:
                canvas.move(player, 0, ledge2Coords[1]-playerCoords[3])
                onLedge = True
        if playerCoords[3] > 460:
            canvas.move(player, 0, 460-playerCoords[3])
        if level != 3:
            if playerCoords[3] != ledgeCoords[1]:
                onLedge = False
    
def keyRelease(key):
    global inputs
    if key.char in inputs:
        inputs.pop(inputs.index(key.char))
        
def keyPress(key):
    global inputs
    if not key.char in inputs:
        inputs.append(key.char)
        
def mouseLeftClick(click):
    global mousex
    global mousey
    global game
    global orange_portal
    global blueCoords
    global orangeCoords
    global ledgeCoords
    global doorCoords
    
    mousex = click.x
    mousey = click.y
    
    if mousey > 435:
        mousey = 435
    if mousey < 25:
        mousey = 25
    if ledgeCoords[1]-25 < mousey < (ledgeCoords[1]+ledgeCoords[3])*.5:
        if ledgeCoords[4] <= mousex <= 500:
            if ledgeCoords[4] == 470:
                mousey = ledgeCoords[1]-25
        if 0 <= mousex <= ledgeCoords[0]:
            if ledgeCoords[0] == 30:
                mousey = ledgeCoords[1]-25
    if (ledgeCoords[1]+ledgeCoords[3])*.5 <= mousey < ledgeCoords[3]+25:
        if ledgeCoords[4] <= mousex <= 500:
            if ledgeCoords[4] == 470:
                mousey = ledgeCoords[3]+25
        if 0 <= mousex <= ledgeCoords[0]:
            if ledgeCoords[0] == 30:
                mousey = ledgeCoords[3]+25
    if doorCoords[1]-25 <= mousey <= doorCoords[3]:
        if doorCoords[0] <= mousex <= 500:
            mousey = doorCoords[1]-25
    if doorCoords[3] < mousey <= doorCoords[3]+25:
        if doorCoords[0] <= mousex <= 500:
            mousey = doorCoords[3]+25
    if doorCoords[1] == ledgeCoords[3] and ((doorCoords[1] <= mousey <= doorCoords[3]) or (ledgeCoords[1] <= mousey <= ledgeCoords[3])):
        if doorCoords[0] <= mousex <= 500:
            mousex = 200
    if mousey < 0 or mousey > 500:
        mousex = 200
    
    if game == True:
        if ((blueCoords[1] < mousey+25 < blueCoords[3]) or (blueCoords[1] < mousey-25 < blueCoords[3]) or (blueCoords[1] < mousey < blueCoords[3])):
            if not (blueCoords[0] < mousex < blueCoords[2]):
                if mousex > 470:
                    canvas.delete(orange_portal)
                    orange_portal = canvas.create_oval(470, mousey-25, 500, mousey+25, fill="orange")
                elif mousex < 30:
                    canvas.delete(orange_portal)
                    orange_portal = canvas.create_oval(0, mousey-25, 30, mousey+25, fill="orange")
        elif not ((blueCoords[1] < mousey+25 < blueCoords[3]) or (blueCoords[1] < mousey-25 < blueCoords[3]) or (blueCoords[1] < mousey < blueCoords[3])):
            if mousex > 470:
                canvas.delete(orange_portal)
                orange_portal = canvas.create_oval(470, mousey-25, 500, mousey+25, fill="orange")
            elif mousex < 30:
                canvas.delete(orange_portal)
                orange_portal = canvas.create_oval(0, mousey-25, 30, mousey+25, fill="orange")
            
def mouseRightClick(click):
    global mousex
    global mousey
    global game
    global blue_portal
    global orangeCoords
    global blueCoords
    
    mousex = click.x
    mousey = click.y
    
    if mousey > 435:
        mousey = 435
    if mousey < 25:
        mousey = 25
    if ledgeCoords[1]-25 < mousey < (ledgeCoords[1]+ledgeCoords[3])*.5:
        if ledgeCoords[4] <= mousex <= 500:
            if ledgeCoords[4] == 470:
                mousey = ledgeCoords[1]-25
        if 0 <= mousex <= ledgeCoords[0]:
            if ledgeCoords[0] == 30:
                mousey = ledgeCoords[1]-25
    if (ledgeCoords[1]+ledgeCoords[3])*.5 <= mousey < ledgeCoords[3]+25:
        if ledgeCoords[4] <= mousex <= 500:
            if ledgeCoords[4] == 470:
                mousey = ledgeCoords[3]+25
        if 0 <= mousex <= ledgeCoords[0]:
            if ledgeCoords[0] == 30:
                mousey = ledgeCoords[3]+25
    if doorCoords[1]-25 <= mousey <= doorCoords[3]:
        if doorCoords[0] <= mousex <= 500:
            mousey = doorCoords[1]-25
    if doorCoords[3] < mousey <= doorCoords[3]+25:
        if doorCoords[0] <= mousex <= 500:
            mousey = doorCoords[3]+25
    if doorCoords[1] == ledgeCoords[3] and ((doorCoords[1] <= mousey <= doorCoords[3]) or (ledgeCoords[1] <= mousey <= ledgeCoords[3])):
        if doorCoords[0] <= mousex <= 500:
            mousex = 200
    if mousey < 0 or mousey > 500:
        mousex = 200
    
    if game == True:
        if ((orangeCoords[1] < mousey+25 < orangeCoords[3]) or (orangeCoords[1] < mousey-25 < orangeCoords[3]) or (orangeCoords[1] < mousey < orangeCoords[3])):
            if not (orangeCoords[0] < mousex < orangeCoords[2]):
                if mousex > 470:
                    canvas.delete(blue_portal)
                    blue_portal = canvas.create_oval(470, mousey-25, 500, mousey+25, fill="blue")
                elif mousex < 30:
                    canvas.delete(blue_portal)
                    blue_portal = canvas.create_oval(0, mousey-25, 30, mousey+25, fill="blue")
        elif not ((orangeCoords[1] < mousey+25 < orangeCoords[3]) or (orangeCoords[1] < mousey-25 < orangeCoords[3]) or (orangeCoords[1] < mousey < orangeCoords[3])):
            if mousex > 470:
                canvas.delete(blue_portal)
                blue_portal = canvas.create_oval(470, mousey-25, 500, mousey+25, fill="blue")
            elif mousex < 30:
                canvas.delete(blue_portal)
                blue_portal = canvas.create_oval(0, mousey-25, 30, mousey+25, fill="blue")

canvas.bind("<KeyRelease>", keyRelease)
canvas.bind("<KeyPress>", keyPress)
canvas.bind("<Button-1>", mouseLeftClick)
canvas.bind("<Button-3>", mouseRightClick)
canvas.focus_set() 
Keys()

def Time():
    global timeChange
    global pastFrameTime
    newFrameTime = clock()
    timeChange = newFrameTime - pastFrameTime
    pastFrameTime = newFrameTime
    canvas.after(1, Time)
    
        
controlsButton = Button(root,command = Controls,background="green",text="Controls", font=buttonfont)
controlsButton.pack()
canvas.create_window(125, 340, width=250,height=100,anchor=NW, window=controlsButton)

startButton = Button(root,command = Start,background="red",text="Start", font=buttonfont)
startButton.pack()
canvas.create_window(150, 200, width=200,height=100,anchor=NW, window=startButton)

Time()

root.mainloop()
