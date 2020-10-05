prevVoteResult : int =1

def if_changed(int voteResult):
    if(voteResult == prevVoteResult):
        prevVoteResult = voteResult
        voteResult = 1
    else:
        prevVoteResult = voteResult
        next(voteResult)
