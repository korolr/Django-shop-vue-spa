from rest_framework import serializers
from article.models import Article
from myshop.models import *

class ArticlePreviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'created_at',
            'announce',
            'url',
        ]


class ArticleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'title',
            'created_at',
            'text',
        ]

class ShopPrev(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'image',
            'price',
        ]


class ShopDetal(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'name',
            'test',
            'text',
        ]


