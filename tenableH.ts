// @ts-check
import type { LevelEntry } from "../data";
import tenableData from "./ten.json";

// @ts-ignore
window.NavLevel = window.NavLevel || {
    Grouping: {},
    groupingFunctions: {},
    Sorting: {},
    sortingFunctions: {}
};

const ZH_HANS = true;

window.NavLevel.Grouping.tenableH = "TenableH序"
window.NavLevel.groupingFunctions.tenableH = (entries: LevelEntry[]) => {
    const top10 = entries.filter(entry => {
        const index = tenableData.findIndex(l => l.name === entry.page);
        return index >= 0 && index < 10;
    });
    const top50 = entries.filter(entry => {
        const index = tenableData.findIndex(l => l.name === entry.page);
        return index >= 10 && index < 50;
    });
    const top150 = entries.filter(entry => {
        const index = tenableData.findIndex(l => l.name === entry.page);
        return index >= 50 && index < 150;
    });
    const rest = entries.filter(entry => {
        const index = tenableData.findIndex(l => l.name === entry.page);
        return index >= 150;
    });
    const other = entries.filter(entry => {
        const index = tenableData.findIndex(l => l.name === entry.page);
        return index < 0;
    });
    return [
        {
            group: "Top10",
            list: top10
        },
        {
            group: "11~50",
            list: top50
        },
        {
            group: "51~150",
            list: top150
        },
        {
            group: "151~218",
            list: rest
        },
        {
            group: "其他",
            list: other
        }
    ]
}


window.NavLevel.Sorting.tenableH = "TenableH序"

window.NavLevel.sortingFunctions.tenableH = (a: LevelEntry, b: LevelEntry) => {
    const indexA = tenableData.findIndex(l => l.name === a.page);
    const indexB = tenableData.findIndex(l => l.name === b.page);
    if (indexA < 0 && indexB < 0) {
        return 0;
    }
    if (indexA < 0) {
        return -1;
    }
    if (indexB < 0) {
        return 1;
    }
    return tenableData[indexB].score - tenableData[indexA].score;
}

window.NavLevel.processPopup = (entry: LevelEntry, div: HTMLElement) => {
    const index = tenableData.findIndex(l => l.name === entry.page);
    const data = tenableData[index];
    requestAnimationFrame(() => {
        const span = document.createElement("span");
        span.innerHTML = `<br>[TenableH] 位${index >= 0 ? index + 1 : "缺"} (${index >= 0 ? data.score + 'pts' : "N/A"})`;
        if (index >= 0) {
            span.innerHTML += `\
<div style="display: grid; grid-template-columns: auto 1fr 1fr auto; column-gap: 2px;">
<div>${ZH_HANS ? "美观"   : "美觀"  }：</div><div>${data.beau.replace(" ", "</div><div>/ 30</div><div>")}</div>
<div>${ZH_HANS ? "创新性" : "創新性"}：</div><div>${data.crea.replace(" ", "</div><div>/ 20</div><div>")}</div>
<div>${ZH_HANS ? "表现力" : "表現力"}：</div><div>${data.expr.replace(" ", "</div><div>/ 15</div><div>")}</div>
<div>${ZH_HANS ? "可玩性" : "可玩性"}：</div><div>${data.play.replace(" ", "</div><div>/ 20</div><div>")}</div>
<div>${ZH_HANS ? "逻辑性" : "邏輯性"}：</div><div>${data.logic.replace(" ", "</div><div>/ 15</div><div>")}</div>
</div>
`
        }
        div.append(span);
    })
}

console.log("十恒排序加载完成。");
