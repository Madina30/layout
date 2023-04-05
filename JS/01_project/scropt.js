function credit(){
    let one_1, two_2, tree_3, result;
  result  = document.getElementById('result_credit');
  one_1 = document.getElementById('inp_1').value;
  one_1 = parseInt(one_1);
  
  two_2 = document.getElementById('inp_2').value;
  two_2 = parseInt(two_2);
  //alert(multi_1*multi_2);
  tree_3 = document.getElementById('inp_3').value;
  tree_3 = parseInt(tree_3);

  let count = ((tree_3*one_1*(two_2/100))/365)+(tree_3/one_1)
  result.innerHTML = count

}