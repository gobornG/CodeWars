/*
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
*/

//best code here
function countSmileys(arr) {
    return arr.filter((val) => val.match(/(:|;){1}(-|~)?(\)|D){1}/)).length
  }

//next best code
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);



//alternate solutions
function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }


//Tests
Test.describe("Basic testing", function() {
    it("", _ => {
      Test.assertEquals(countSmileys([]), 0);
      Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
      Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
      Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    });
  });
