import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flatMap } from 'lodash-es';
// tslint:disable:no-submodule-imports
// tslint:disable:ordered-imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface RedditResult {
  thumbnail: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditImageSearchService {
  constructor(private http: HttpClient) {}

  search(
    subReddit: string,
    search: string
  ): Observable<RedditResult[]> {
    const url =
      'https://www.reddit.com/r/' +
      subReddit +
      '/search.json?restrict_sr=on&q=' +
      search;
    return this.http.get(url).map(translateRedditResults);
  }
}

function translateRedditResults(items: any): RedditResult[] {
  // This function doesn't know anything about HTTP or Observable; it just
  // manages the messy shape of this API's data return layout.

  return flatMap(
    items.data.children,
    (item: { [key: string]: any }): RedditResult[] => {
      if (item) {
        const redditPost = item['data'];
        if (redditPost) {
          const thumbnail = redditPost['thumbnail'];
          const title = redditPost['title'];
          if (thumbnail.startsWith('http')) {
            return [{ thumbnail, title }];
          }
        }
      }
      return [];
    }
  );
}
