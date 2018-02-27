import scrapy


class SpotOnSpider(scrapy.Spider):
    name = 'spoton'

    start_urls = ['']

    def parse(self, response):
        yield
