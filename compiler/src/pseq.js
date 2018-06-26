var next_stack = [];

function pipeline_block(block){    
	for(var i=0;i<block.length;i++){
		var curr = block[i];
		if(curr[0]){//this is a nested block
			next_stack.push(block[i+1]);
			pipeline_block(curr);
		}else{
			var next = block[i+1];
			if(!next){
				next = next_stack.pop();
			}
			if(next){
				if(next[0]){//this is another nested block
					curr.next = next[0];
				}else{
					curr.next = next;
				}
			}	
		}	
	}
}

exports.transform = function(ast, ctx){
	if(ast.pipeline){
		pipeline_block(ast.pipeline.block);
	}
};

