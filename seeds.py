from app import app, db
from models.distillery import Distillery
from models.whisky import Whisky
from models.user import User

with app.app_context():
    db.drop_all()
    db.create_all()

    johnny = User(
        username='JohnnyTwoTimes',
        email='twotimes@twotimes.com'
    )
    johnny.save()

    mongoose = User(
        username='Mongoose',
        email='busy@eatingsnakes.com'
    )
    mongoose.save()

    dalmore = Distillery(
        name='Dalmore Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/8/86/Scotland_Alness_Dalmore_Distillery.jpg',
        founded=1839,
        town='Alness',
        country='Scotland',
        visited_by=[johnny],
        lat=57.688681,
        lng=-4.238943
    )
    dalmore.save()

    macallan = Distillery(
        name='Macallan Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/8/8d/The_Macallan_Distillery.jpg',
        founded=1824,
        town='Moray',
        country='Scotland',
        lat=57.483763,
        lng=-3.208544
    )
    macallan.save()

    lakes = Distillery(
        name='The Lakes Distillery',
        # pylint: disable=C0301
        image='https://www.visitcumbria.com/wp-content/gallery/lakesdistillery/lakesdistillery4.jpg',
        founded=2013,
        town='Cumbria',
        country='England',
        lat=54.676,
        lng=-3.248
    )
    lakes.save()

    arran = Distillery(
        name='Arran Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/d/db/Arran_Distillery%2C_Lochranza_%2C_Isle_of_Arran.jpg',
        founded=1995,
        town='Lochranza',
        country='Scotland',
        lat=55.699585,
        lng=-5.2796
    )
    arran.save()

    yamazaki = Distillery(
        name='Yamazaki Distillery',
        # pylint: disable=C0301
        image='https://upload.wikimedia.org/wikipedia/commons/5/57/YamazakiBarrels.JPG',
        founded=1923,
        town='Shinamoto',
        country='Japan',
        lat=34.8912,
        lng=135.6734
    )
    yamazaki.save()

    dalmore_18 = Whisky(
        name='Dalmore 18 Year Old',
        image='https://img.thewhiskyexchange.com/900/dlmob.18yo.jpg',
        price=107,
        age=18,
        # pylint: disable=C0301
        description='Dalmore’s trademark style is luscious notes of orange, chocolate and spices, and the 18 Year Old bottling is a terrific example. Aged in both bourbon and sherry casks, it has seductive notes of vanilla, dark chocolate and candied orange on the nose, followed by a full-bodied, spicy palate of cinnamon and stewed fruit.',
        abv=43,
        cask='Bourbon, Sherry',
        distillery=dalmore,
        tasted_by=[johnny, mongoose]
    )
    dalmore_18.save()

    king_alexander = Whisky(
        name='Dalmore King Alexander III',
        image='https://img.thewhiskyexchange.com/900/dlmob.non3.jpg',
        price=175,
        # pylint: disable=C0301
        description='To make Dalmore King Alexander III, Master Distiller Richard Paterson selected a range of differently aged malts matured in a mixure of French wine casks, Madeira drums, sherry butts, Marsala barrels, port pipes and bourbon barrels from Kentucky. A remarkable feat of blending.',
        abv=40,
        cask='Wine, Madeira, Sherry, Marsala, Port, Bourbon',
        distillery=dalmore,
        tasted_by=[johnny]
    )
    king_alexander.save()

    amber = Whisky(
        name='Macallan Amber',
        image='https://img.thewhiskyexchange.com/900/macob.non32.jpg',
        price=60,
        # pylint: disable=C0301
        description='An, unsurprisingly, amber-coloured dram from Macallan, part of the colour-named 1824 Series. It is matured in sherry casks and chosen to be more fully flavoured than the Gold but more restrained than the Sienna. A great example of what Macallan can do with good-quality oak.',
        abv=40,
        cask='Sherry',
        distillery=macallan
    )
    amber.save()

    steel_bonnets = Whisky(
        name='Lakes Distillery Steel Bonnets',
        image='https://img.thewhiskyexchange.com/900/vatted_lak1.jpg',
        price=60,
        # pylint: disable=C0301
        description='Named for the border reivers who raided indiscriminately along the Anglo-Scottish border during the mid- to late-Middle Ages, Steel Bonnets blends whiskies from both England and Scotland, constructed around a central core of Lakes Distillery single malt. A beautifully-balanced limited-edition comprised of big vanilla and citrus character, a hint of fresh nuttiness and a distant touch of wood smoke.',
        abv=46.6,
        distillery=lakes
    )
    steel_bonnets.save()

    yamazaki_12 = Whisky(
        name='Suntory Yamazaki 12 Year Old',
        image='https://img.thewhiskyexchange.com/900/japan_yam1.jpg',
        price=120,
        # pylint: disable=C0301
        description='Yamazaki 12 year Old is a pioneering malt in Japan, for which Suntory deserve great credit. In its early days, it was rounded and delicate...now it is more intense, confident and elegant. 8/10 –  Michael Jackson, Whisky Magazine, Oct 2002',
        abv=43,
        cask='Sherry',
        distillery=yamazaki
    )
    yamazaki_12.save()

    yamazaki_10 = Whisky(
        name='Suntory Yamazaki 10 Year Old',
        image='https://img.thewhiskyexchange.com/900/japan_yam4.jpg',
        price=399,
        # pylint: disable=C0301
        description='An introductory malt from Yamazaki, Japan\'s oldest distillery (founded in 1923). This is mild-mannered, clean, sweet malt, charming and very accessible - Speyside fans looking to try a Japanese malt should start here.',
        abv=43,
        cask='Sherry',
        distillery=yamazaki
    )
    yamazaki_10.save()

    yamazaki_bourbon = Whisky(
        name='Yamazaki Bourbon Barrel',
        image='https://img.thewhiskyexchange.com/900/japan_yam41.jpg',
        price=1000,
        # pylint: disable=C0301
        description='The 2013 edition of Suntory\'s Yamazaki Bourbon Cask, maturing the spirit solely in bourbon casks to give a soft and fruity whisky with classic bourbon cask notes.',
        abv=48,
        cask='Bourbon',
        distillery=yamazaki
    )
    yamazaki_bourbon.save()

    arran_22 = Whisky(
        name='Arran 22 Year Old',
        image='https://img.thewhiskyexchange.com/900/arrob.1996v9.jpg',
        price=150,
        # pylint: disable=C0301
        description='Our very own single-cask Arran single malt, filled into a sherry hogshead just a year after the distillery started production. This 22-year-old whisky has enticing aromas of crème brulee, sultana, bittersweet orange and cigar box, while the deliciously seductive palate has flavours of walnut, figgy pudding and wood spice, alongside a silky texture. Exclusive to The Whisky Exchange – one of the delightful things we\'ve bottled to celebrate our 20th anniversary.',
        abv=50,
        cask='Sherry',
        distillery=arran
    )
    arran_22.save()

    arran_port = Whisky(
        name='Arran Port Cask Finish',
        image='https://img.thewhiskyexchange.com/900/arrob.non31.jpg',
        price=45,
        # pylint: disable=C0301
        description='A bold, sweet Port finish from Arran, released in late 2010 as part of the downsized standard offering from the distillery now that their malt is fully mature. Bottled at 50%, so some water may be preferred.',
        abv=50,
        cask='Port',
        distillery=arran
    )
    arran_port.save()

    arran_machrie_moore_cask = Whisky(
        name='Arran Machrie Moore Cask Strength',
        image='https://img.thewhiskyexchange.com/900/arrob.non62.jpg',
        price=50,
        # pylint: disable=C0301
        description='A cask-strength version of The Arran\'s peated Machrie Moor single malt - a whisky crafted to encapsulate the rugged and myth-strewn landscape of the island of Arran. Bottled at 56.2%, the sharp citrus notes and brooding peat smoke last easily into the lingering finish.',
        abv=56,
        cask='Sherry',
        distillery=arran
    )

    macallan_18 = Whisky(
        name='Macallan 18 Year Old',
        image='https://img.thewhiskyexchange.com/900/macob.18yov5.jpg',
        price=325,
        # pylint: disable=C0301
        description='The 2018 edition of Macallan\'s legendary Sherry Oak 18 Year Old, part of a range that celebrates the marriage of its rich spirit with the finest sherry-seasoned oak casks. In this case, the result of ageing Macallan\'s spirit solely in sherry casks for 18 years is a full bodied, fruity whisky with notes of ginger, raisin and mature oak.',
        abv=43,
        cask='Sherry',
        distillery=macallan
    )
    macallan_18.save()

    macallan_estate = Whisky(
        name='Macallan Estate Reserve',
        image='https://img.thewhiskyexchange.com/900/macob.non22.jpg',
        price=250,
        # pylint: disable=C0301
        description='The Macallan Estate Reserve draws on casks selected for maximum intensity and depth of flavours, including some sherry-seasoned hogsheads, and has been bottled at the traditional strength of 80 UK prooof (45.7%). The 1824 Collection is a range of Macallans released for the travel retail market.',
        abv=46,
        cask='Sherry',
        distillery=macallan
    )
    macallan_estate.save()
