#!/bin/bash

read -p "Which asset exactly are we talking about here? (for example 'bitcoin') [ethereum]: " financialasset
financialasset=${financialasset:-ethereum}

read -p "At what price did you make your investment? (for example '1400') [175]: " financialinvestment
financialinvestment=${financialinvestment:-ethereum}

read -p "Were you bullish or bearish? (you can say either 'long' or 'short') [long]: " financialposition
financialposition=${financialposition:-long}

read -p "What leverage did you apply? ('3X', '4X', '5X', or '6X') [6]: " financialleverage
financialleverage=${financialleverage:-6}

read -p "What return were you dreaming of for holding that position in decimal terms? (for example 0.05 for 5%) [0.05]: " equityreturn
equityreturn=${equityreturn:-0.05}

read -p "On what mobile number may I message you if your dreams come true? [+15104594120]: " contactnumber
contactnumber=${contactnumber:-+15104594120}

node opynalert.js $financialasset $financialinvestment $financialposition $financialleverage $equityreturn $contactnumber > /tmp/opynalert-${financialasset}-${financialleverage}.log 2>&1 < /tmp/opynalert-${financialasset}-${financialleverage}.log &
