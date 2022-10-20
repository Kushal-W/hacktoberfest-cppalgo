import turtle
starting_position=[(0,0),(-20,0),(-40,0)]
MOVE_DISTANCE=20
LEFT=180
RIGHT=0    
UP=90
DOWN=270
class Snake: 
    
    

    def __init__(self) -> None:
        self.segment = []
        self.create_snake()
        self.head =self.segment[0]
    def create_snake(self):
        for position in starting_position:
            self.add_segment(position)
        
    
    def move(self):
            for seg_num in range(len(self.segment)-1 , 0 , -1):
                new_x =self.segment[seg_num-1].xcor()
                new_y =self.segment[seg_num-1].ycor()
                self.segment[seg_num].goto(new_x,new_y)
            self.head.forward(MOVE_DISTANCE) 
    def up(self):
        if self.head.heading() != DOWN:
            self.head.setheading(UP)
           
    def down(self):
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

    def left(self):
        if self.head.heading() != RIGHT:
            self.head.setheading(LEFT)

    def right(self):
        if self.head.heading() != LEFT:
            self.head.setheading(RIGHT)
    
    
    def add_segment(self,position):
        new_segment = turtle.Turtle("square")
        new_segment.color("white")
        new_segment.penup() 
        new_segment.goto(position)
        self.segment.append(new_segment)



    def extend(self):
        self.add_segment(self.segment[-1].position())

# Create Snake Body
# segment_1=Turtle("square")
# segment_1.color("white")


# segment_2=Turtle("square")
# segment_2.color("white")
# segment_2.goto(-20,0)

# segment_3=Turtle("square")
# segment_3.color("white")
# segment_3.goto(-40,0)   
