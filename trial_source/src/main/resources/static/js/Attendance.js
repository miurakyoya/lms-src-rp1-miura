window.onload = function () 
{
	
  fetch("/detail") // APIを呼び出す（未入力チェック）
    .then(res => res.text())
    .then(result => {
		 console.log("APIの返却値:", result); // ← ここで確認

      if (result === "true") {
        alert("過去日の勤怠に未入力があります。");
      }
      // "false" の場合は何もしない
    })
    .catch(error => {
      console.error("チェック失敗:", error);
    });
};