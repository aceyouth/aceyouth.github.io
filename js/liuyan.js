new Vue({
    el: '#app',
    data: {
        comments: [
            { name: '豪', message: '爱你！！！' },
            { name: '悦', message: '爱你！！！' },
            // 初始留言数据
        ],
        newComment: {
            name: '',
            message: ''
        }
    },
    methods: {
        submitComment() {
            if (this.newComment.name && this.newComment.message) {
                this.comments.push({
                    name: this.newComment.name,
                    message: this.newComment.message
                });
                this.newComment.name = '';
                this.newComment.message = '';
            }
        }
    }
  });
  