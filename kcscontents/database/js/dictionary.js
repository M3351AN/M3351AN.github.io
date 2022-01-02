// ---------------------------------------------------------------------
// 初期化
// ---------------------------------------------------------------------
function init()
{
    // メインフレームの内容を初期化する。
    viewIndex('main.html')
}
// ---------------------------------------------------------------------
// 索引の表示
// ---------------------------------------------------------------------
function viewIndex(url)
{
    // メインフレームの内容をクリアする。
    document.getElementById("wrapPrimary").innerHTML = "";

    // メインフレームにページを読み込む。
    document.getElementById("wrapPrimary").innerHTML =
        "<iframe id=\"mainframe\" name=\"mainframe\" src=\""+ url +
        "\" width=\"500px\" height=\"860px\" " + 
        "allowtransparency=\"true\" frameborder=\"0\"></iframe>";

    // 境界線は表示しない。
    document.getElementById("mainframe").style.border = "0px";

    // スクロールバーは表示しない。
    document.getElementById("mainframe").style.overflow = "hidden";

}
// ---------------------------------------------------------------------
// 説明の表示
// ---------------------------------------------------------------------
function viewData(url)
{
    // サブフレームの内容をクリアする。
    document.getElementById("setumei").innerHTML = "";

    // サブフレームにページを読み込む。
    document.getElementById("setumei").innerHTML =
        "<iframe id=\"subframe\" name=\"subframe\" src=\""+ url +
        "\" width=\"500px\" height=\"300px\" " + 
        "allowtransparency=\"true\" frameborder=\"0\"></iframe>";

    // 境界線は表示しない。
    document.getElementById("subframe").style.border = "0px";

    // スクロールバーは表示しない。
    document.getElementById("subframe").style.overflow = "hidden";
}
