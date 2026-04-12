 Resuming AvasGPT...
Training with Cosine Decay...
Step 25000 | Loss 5.1691 | LR 3.30e-04
Sample: Artificial Intelligence is a great way to get a look at the top of the top of the top 10 players.

The first game in the game is a game changer, but it is a game changer
Step 25500 | Loss 4.9839 | LR 3.30e-04
Sample: Artificial Intelligence is a former senior vice president of the United States and the United States.

The United States is a member of the United States.

The United States is a member of the United States.
Step 26000 | Loss 5.0136 | LR 3.30e-04
Sample: Artificial Intelligence is a member of the United States.

The United States is a member of the United States, and the United States is a member of the United States.

The United States is a member
Step 26500 | Loss 5.1468 | LR 3.30e-04
Sample: Artificial Intelligence is a great deal.

The first time the game is a game of the game, the game is a game that is a game of game. The game is a game that is a game that
Step 27000 | Loss 5.0916 | LR 3.30e-04
Sample: Artificial Intelligence is a great deal.

The new deal is a good deal.

The company has a good deal with the company, and the company has a lot of money for the company.


---------------------------------------------------------------------------
KeyboardInterrupt                         Traceback (most recent call last)
/tmp/ipykernel_5793/3129230051.py in <cell line: 0>()
     39         param_group['lr'] = lr
     40 
---> 41     x, y = get_batch(data_iter, batch_size, block_size)
     42     logits, loss = model(x, y)
     43 

/tmp/ipykernel_5793/2245052319.py in get_batch(dataset_iterator, batch_size, block_size)
     35     y = data[1:].view(batch_size, block_size)
     36 
---> 37     return x.to(device), y.to(device)
     38 
     39 # Initialize the stream

KeyboardInterrupt: 
