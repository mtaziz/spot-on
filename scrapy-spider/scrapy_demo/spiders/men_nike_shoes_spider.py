import scrapy
import json

from scrapy.spiders import CrawlSpider, Rule
from scrapy_demo.items import NikeShoesItem


class NikeShoesSpider(scrapy.Spider):
    name = "nike_shoes"
    domain = "https://store.nike.com/"
    men_site_url = "https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-shoes/7puZoi3&pn=%s"
    women_site_url = "https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=womens-shoes/7ptZoi3&pn=%s"

    download_delay = 1.5

    def start_requests(self):
        urls = [
            self.men_site_url % "1",
            self.women_site_url % "1",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        outer_data = json.loads(response.body)
        inner_data = outer_data.get('sections', [{}])[0]

        for item in inner_data.get('products', []):
            element = NikeShoesItem()

            element['product_name'] = item.get('title')
            element['product_price'] = item.get('localPrice')
            element['product_image_url'] = item.get('spriteSheet')
            element['product_stock'] = item.get('inStock')
            element['product_rating'] = item.get('rating')
            element['product_url'] = item.get('pdpUrl')
            element['product_subtitle'] = item.get('subtitle')
            yield element

        if outer_data['nextPageDataService']:
            next_page = self.domain + outer_data['nextPageDataService']
            yield scrapy.Request(next_page)
