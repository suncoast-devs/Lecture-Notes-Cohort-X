### Requirements: 
---
- 50/50 Raffle 

- [x] a user can buy a ticket
    - [x] enter a users name
        - [x] button & textbox
        - [x] on button click, store name into array
    - [x] store that name in an array "bucket"
        - [x] on button click `bucket.push(name)`
- [x] Display all people in raffle
- [X] random pick a ticket that was purchased 
    - half the money goes to ....somewhere else
    - half the money goes to the prize, winner
- [x] reset the Raffle


#### Refactor



Problem: we are only storing the names of who bought tickets. We want to store how many the person paid and how many tickets

Assumption: Each ticket is 5$, a user can buy multiple tickets

- [x] 1 user can buy multiple tickets
    - [x] add textbox to see how many tickets they bought
    - [x] store the amount paid, per person
    - [x] store the number of tickets per person
- [x] Update how the pot total is calculated
    - loop the array, add the amounts paid to a total as we go 
- [ ] Update the winner/organize money split
- [ ] Update the winner select to reflect multiple tickets


#### BONUS: 
- rig the system
- "Mike Smith Problem"
- fix the negative number


















