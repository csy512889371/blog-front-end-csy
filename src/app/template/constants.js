
export const BlogsReducerNames = {
    topicHome: 'blogTopicHome',
    topicVideo:'blogTopicVideo',
    videoSearchList:"blogVideoSearchList",
    videoInfo:'blogVideoInfo',
    communitySubTopic: 'blogCommunitySubTopic',
};

export const getCategory = () => {
    let categories = [];

    categories.push({
        name: "视频教程",
        code: "video"
    });
    categories.push({
        name: "文章",
        code: "article"
    });
    categories.push({
        name: "书籍",
        code: "book"
    });
    categories.push({
        name: "帖子",
        code: "note"
    });

    return categories
};
