// gulpfile.babel.js

var gulp = require('gulp')

gulp.task("index-site", (cb) => {

    var pagesIndex = [];
  
    return gulp.src("dist/**/*.html")
      .pipe(reduce(function(memo, content, file, cb) {
  
        var section      = S(file.path).chompLeft(file.cwd + "/dist").between("/", "/").s,
            title        = S(content).between("<title>", "</title").collapseWhitespace().chompRight(" | Netlify").s,
            pageContent  = S(content).collapseWhitespace().between('search-results">', '<footer class="footer').stripTags().collapseWhitespace().s,
            href         = S(file.path).chompLeft(file.cwd + "/dist").s,
            pageInfo     = new Object(),
            isRestricted = false,
            blacklist    = [
              "/thanks",
              "404"
            ];
  
          
  
          pageInfo["section"] = section;
          pageInfo["title"]   = title;
          pageInfo["href"]    = href;
  
          pageInfo["content"] = pageContent;
  
          pagesIndex.push(pageInfo);
        },
  
        cb(null, JSON.stringify(pagesIndex)), "{}"))
      .pipe(rename("PagesIndex.json"))
      .pipe(gulp.dest("./dist/js/lunr"));
  });