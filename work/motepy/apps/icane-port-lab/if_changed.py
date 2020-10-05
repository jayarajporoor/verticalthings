prevVoteResult : int =1

def if_changed(voteResult: int):
	if voteResult == prevVoteResult:
		prevVoteResult = voteResult
		voteResult = 1
        raise RestartPipeline
	else:
		prevVoteResult = voteResult
		return voteResult
